import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Eye, 
  EyeOff, 
  Globe, 
  MoreHorizontal,
  ChevronRight,
  Loader2,
  TrendingUp,
  BookOpen,
  Users
} from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import api from '../../services/api.client';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Skeleton } from '../../components/skeletons';

const domainSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/, "Slug must be lowercase and contain only hyphens"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  icon: z.string().min(1, "Icon is required"),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Invalid hex color"),
  demandScore: z.number().min(0).max(100),
  status: z.enum(['DRAFT', 'PUBLISHED']),
});

type DomainFormValues = z.infer<typeof domainSchema>;

export const DomainsPage = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDomain, setEditingDomain] = useState<any>(null);

  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<DomainFormValues>({
    resolver: zodResolver(domainSchema),
    defaultValues: {
      demandScore: 50,
      status: 'DRAFT',
      color: '#3B82F6'
    }
  });

  const demandScore = watch('demandScore');
  const domainName = watch('name');

  // Auto-generate slug from name
  React.useEffect(() => {
    if (!editingDomain && domainName) {
      const slug = domainName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
      setValue('slug', slug);
    }
  }, [domainName, setValue, editingDomain]);

  // Domains Query
  const { data: domains, isLoading } = useQuery({
    queryKey: ['admin-domains'],
    queryFn: () => api.get('/admin/domains').then(r => r.data.data)
  });

  // Mutations
  const createDomain = useMutation({
    mutationFn: (data: DomainFormValues) => api.post('/admin/domains', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-domains'] });
      setIsModalOpen(false);
      reset();
      toast.success('Domain created successfully');
    }
  });

  const updateDomain = useMutation({
    mutationFn: (data: DomainFormValues) => api.put(`/admin/domains/${editingDomain.id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-domains'] });
      setIsModalOpen(false);
      setEditingDomain(null);
      reset();
      toast.success('Domain updated successfully');
    }
  });

  const deleteDomain = useMutation({
    mutationFn: (id: string) => api.delete(`/admin/domains/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-domains'] });
      toast.success('Domain deleted');
    }
  });

  const handleEdit = (domain: any) => {
    setEditingDomain(domain);
    reset(domain);
    setIsModalOpen(true);
  };

  const onFormSubmit = (data: DomainFormValues) => {
    if (editingDomain) {
      updateDomain.mutate(data);
    } else {
      createDomain.mutate(data);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-black text-text-primary tracking-tight">Domains</h1>
          <p className="text-sm text-text-tertiary">Manage curriculum domains and demand scores</p>
        </div>
        <Button onClick={() => { setEditingDomain(null); reset(); setIsModalOpen(true); }} className="bg-brand-600">
          <Plus className="w-4 h-4 mr-2" /> New Domain
        </Button>
      </div>

      <div className="border border-border-subtle rounded-2xl bg-bg-primary overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-bg-secondary/30">
              <TableHead className="w-[300px] text-[10px] font-black uppercase">Domain</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Slug</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Modules</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Enrolled</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Demand</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Status</TableHead>
              <TableHead className="text-right text-[10px] font-black uppercase">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <TableRow key={i}><TableCell colSpan={7}><Skeleton className="h-12 w-full" /></TableCell></TableRow>
              ))
            ) : domains?.map((d: any) => (
              <TableRow key={d.id} className="hover:bg-bg-secondary/10 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm border border-border-subtle"
                      style={{ backgroundColor: `${d.color}15` }}
                    >
                      {d.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary">{d.name}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                        <span className="text-[10px] text-text-tertiary font-mono uppercase">{d.color}</span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-[11px] font-mono text-text-tertiary">/{d.slug}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-text-tertiary" />
                    <span className="text-sm font-bold">{d._count?.modules || 0}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-text-tertiary" />
                    <span className="text-sm font-bold">{d._count?.enrollments || 0}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{d.demandScore}</span>
                    <TrendingUp className={`w-3.5 h-3.5 ${d.demandScore > 80 ? 'text-green-500' : 'text-text-tertiary'}`} />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={d.status === 'PUBLISHED' ? 'default' : 'secondary'} className={d.status === 'PUBLISHED' ? 'bg-green-500 hover:bg-green-600' : ''}>
                    {d.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(d)}>
                        <Edit2 className="w-4 h-4 mr-2" /> Edit Domain
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => {/* navigate to modules */}}>
                        <Eye className="w-4 h-4 mr-2" /> View Modules
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => deleteDomain.mutate(d.id)}>
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Domain Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-xl bg-bg-primary border-border-subtle">
          <DialogHeader>
            <DialogTitle className="text-xl font-display font-black tracking-tight">
              {editingDomain ? 'Edit Domain' : 'Create New Domain'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Domain Name</Label>
                <Input id="name" placeholder="e.g. GenAI Engineering" {...register('name')} />
                {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <div className="flex items-center bg-bg-secondary rounded-md px-3 border border-border-subtle">
                  <span className="text-xs text-text-tertiary font-mono">/</span>
                  <input 
                    id="slug" 
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-mono p-2" 
                    {...register('slug')} 
                  />
                </div>
                {errors.slug && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.slug.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Short overview of what learners will gain..." {...register('description')} />
              {errors.description && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.description.message}</p>}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="icon">Icon Emoji</Label>
                <Input id="icon" placeholder="⚡" {...register('icon')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="color">Accent Color</Label>
                <div className="flex gap-2">
                  <Input type="color" id="color" className="p-1 w-12 h-10" {...register('color')} />
                  <Input placeholder="#3B82F6" {...register('color')} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <div className="flex items-center gap-3 pt-2">
                  <Switch 
                    checked={watch('status') === 'PUBLISHED'}
                    onCheckedChange={(val) => setValue('status', val ? 'PUBLISHED' : 'DRAFT')}
                  />
                  <span className="text-xs font-bold text-text-secondary">{watch('status')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border-subtle">
              <div className="flex justify-between">
                <Label>Demand Score</Label>
                <span className="text-sm font-black text-brand-600">{demandScore}%</span>
              </div>
              <Slider 
                value={[demandScore]} 
                onValueChange={(val) => setValue('demandScore', val[0])}
                max={100} 
                step={1} 
              />
              <p className="text-[10px] text-text-tertiary italic">Higher scores place the domain higher in the marketplace.</p>
            </div>

            <DialogFooter className="pt-4 border-t border-border-subtle">
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-brand-600 px-8 font-black" disabled={createDomain.isPending || updateDomain.isPending}>
                {createDomain.isPending || updateDomain.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : editingDomain ? 'Save Changes' : 'Create Domain'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DomainsPage;
