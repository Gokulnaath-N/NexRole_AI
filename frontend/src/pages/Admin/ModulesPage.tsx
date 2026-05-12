import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  GripVertical, 
  ArrowUp, 
  ArrowDown, 
  Filter,
  Search,
  BookOpen,
  FileText,
  Video,
  Layout,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api.client';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Skeleton } from '../../components/skeletons';

export const ModulesPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [domainId, setDomainId] = useState<string>('ALL');
  const [search, setSearch] = useState('');

  // Domains for filter
  const { data: domains } = useQuery({
    queryKey: ['admin-domains'],
    queryFn: () => api.get('/admin/domains').then(r => r.data.data)
  });

  // Modules Query
  const { data: modules, isLoading } = useQuery({
    queryKey: ['admin-modules', domainId, search],
    queryFn: async () => {
      const res = await api.get('/admin/modules', {
        params: { domainId: domainId === 'ALL' ? undefined : domainId, search }
      });
      return res.data.data;
    }
  });

  // Mutations
  const deleteModule = useMutation({
    mutationFn: (id: string) => api.delete(`/admin/modules/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-modules'] });
      toast.success('Module deleted');
    }
  });

  const updateOrder = useMutation({
    mutationFn: ({ id, order }: { id: string, order: number }) => 
      api.put(`/admin/modules/${id}`, { order }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-modules'] });
    }
  });

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'READING': return <FileText className="w-4 h-4 text-blue-500" />;
      case 'QUIZ': return <Layout className="w-4 h-4 text-purple-500" />;
      case 'VIDEO': return <Video className="w-4 h-4 text-red-500" />;
      case 'PROJECT': return <BookOpen className="w-4 h-4 text-green-500" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-black text-text-primary tracking-tight">Learning Modules</h1>
          <p className="text-sm text-text-tertiary">Organize curriculum and module content</p>
        </div>
        <Button onClick={() => navigate('/admin/modules/new')} className="bg-brand-600">
          <Plus className="w-4 h-4 mr-2" /> New Module
        </Button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-bg-secondary rounded-2xl border border-border-subtle">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <Input 
            placeholder="Search by title..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-bg-primary border-border-subtle"
          />
        </div>
        <div className="flex items-center gap-3">
          <Filter className="w-4 h-4 text-text-tertiary hidden md:block" />
          <Select value={domainId} onValueChange={setDomainId}>
            <SelectTrigger className="w-[200px] bg-bg-primary">
              <SelectValue placeholder="All Domains" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Domains</SelectItem>
              {domains?.map((d: any) => (
                <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Modules Table */}
      <div className="border border-border-subtle rounded-2xl bg-bg-primary overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-bg-secondary/30">
              <TableHead className="w-[80px] text-[10px] font-black uppercase">Order</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Module Title</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Domain</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Type</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Duration</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Status</TableHead>
              <TableHead className="text-right text-[10px] font-black uppercase">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}><TableCell colSpan={7}><Skeleton className="h-12 w-full" /></TableCell></TableRow>
              ))
            ) : modules?.length > 0 ? (
              modules.map((m: any, i: number) => (
                <TableRow key={m.id} className="hover:bg-bg-secondary/10 transition-colors group">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <GripVertical className="w-4 h-4 text-text-tertiary cursor-grab active:cursor-grabbing" />
                      <span className="text-xs font-black">{m.order}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-bg-secondary group-hover:bg-bg-primary transition-colors">
                        {getModuleIcon(m.type)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-text-primary">{m.title}</span>
                        <span className="text-[10px] text-text-tertiary">ID: {m.id.substring(0, 8)}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest border-border-default">
                      {m.domain?.name || 'Unassigned'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-medium text-text-secondary">{m.type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-medium text-text-secondary">{m.duration} min</span>
                  </TableCell>
                  <TableCell>
                    <Badge className={m.status === 'PUBLISHED' ? 'bg-green-500' : 'bg-slate-400'}>
                      {m.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/modules/${m.id}/edit`)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => deleteModule.mutate(m.id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-text-tertiary italic">
                  No modules found. Create your first module to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ModulesPage;
