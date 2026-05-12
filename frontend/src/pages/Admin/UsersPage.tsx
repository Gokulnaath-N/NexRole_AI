import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  ShieldCheck, 
  ShieldAlert, 
  Ban, 
  UserMinus, 
  UserPlus, 
  RefreshCcw,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Mail,
  Calendar,
  Zap,
  Star,
  BookOpen
} from 'lucide-react';
import { toast } from 'sonner';

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
  DropdownMenuSeparator, 
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
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Skeleton } from '../../components/skeletons';

export const UsersPage = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('ALL');
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Users Query
  const { data, isLoading } = useQuery({
    queryKey: ['admin-users', search, role, page],
    queryFn: async () => {
      const res = await api.get('/admin/users', {
        params: { search, role: role === 'ALL' ? undefined : role, page, limit: 10 }
      });
      return res.data;
    }
  });

  const users = data?.data || [];
  const totalPages = data?.pagination?.totalPages || 1;

  // Mutations
  const { mutate: toggleBan } = useMutation({
    mutationFn: (userId: string) => api.post(`/admin/users/${userId}/ban`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast.success('User status updated');
    }
  });

  const { mutate: promoteToAdmin } = useMutation({
    mutationFn: (userId: string) => api.post(`/admin/users/${userId}/make-admin`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast.success('User promoted to Admin');
    }
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-black text-text-primary tracking-tight">User Management</h1>
          <p className="text-sm text-text-tertiary">{data?.pagination?.totalItems || 0} total users registered</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <Input 
              placeholder="Search users..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-bg-primary"
            />
          </div>
          <Button variant="outline" className="bg-bg-primary">
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <div className="border border-border-subtle rounded-2xl bg-bg-primary overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-bg-secondary/30">
              <TableHead className="w-[300px] text-[10px] font-black uppercase">User</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Role</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Stats</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Status</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Joined</TableHead>
              <TableHead className="text-right text-[10px] font-black uppercase">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell colSpan={6}><Skeleton className="h-12 w-full" /></TableCell>
                </TableRow>
              ))
            ) : users.map((user: any) => (
              <TableRow key={user.id} className="hover:bg-bg-secondary/10 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold overflow-hidden">
                      {user.photoURL ? <img src={user.photoURL} alt="" /> : user.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary">{user.name}</span>
                      <span className="text-[11px] text-text-tertiary">{user.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={
                    user.role === 'ADMIN' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                    user.role === 'INSTRUCTOR' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
                    'bg-blue-500/10 text-blue-500 border-blue-500/20'
                  }>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-bold">{user.xp.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-brand-500" />
                      <span className="text-xs font-bold">{user.streak}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={user.isBanned ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'}>
                    {user.isBanned ? 'Banned' : 'Active'}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs text-text-tertiary">
                  {formatDate(user.createdAt)}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => { setSelectedUser(user); setIsDetailsOpen(true); }}>
                        <ExternalLink className="w-4 h-4 mr-2" /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {user.role !== 'ADMIN' && (
                        <DropdownMenuItem onClick={() => promoteToAdmin(user.id)}>
                          <ShieldCheck className="w-4 h-4 mr-2 text-green-600" /> Make Admin
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-amber-600" onClick={() => {/* reset streak */}}>
                        <RefreshCcw className="w-4 h-4 mr-2" /> Reset Streak
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="text-red-600" 
                        onClick={() => toggleBan(user.id)}
                      >
                        {user.isBanned ? (
                          <><UserPlus className="w-4 h-4 mr-2" /> Unban User</>
                        ) : (
                          <><Ban className="w-4 h-4 mr-2" /> Ban User</>
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-text-tertiary font-medium">
          Showing page {page} of {totalPages}
        </p>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
          >
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* User Details Modal */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl bg-bg-primary border-border-subtle p-0 overflow-hidden">
          {selectedUser && (
            <div className="space-y-0">
              <div className="bg-[#0F172A] p-8 text-white relative">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-3xl font-black overflow-hidden">
                    {selectedUser.photoURL ? <img src={selectedUser.photoURL} alt="" /> : selectedUser.name.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-display font-black tracking-tight">{selectedUser.name}</h2>
                      <Badge className="bg-brand-500">{selectedUser.role}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {selectedUser.email}</div>
                      <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Joined {formatDate(selectedUser.createdAt)}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Total XP', value: selectedUser.xp.toLocaleString(), icon: Star, color: 'text-amber-500' },
                    { label: 'Streak', value: selectedUser.streak, icon: Zap, color: 'text-brand-500' },
                    { label: 'Modules', value: selectedUser._count?.progress || 0, icon: BookOpen, color: 'text-blue-500' },
                    { label: 'Certs', value: selectedUser._count?.certificates || 0, icon: ShieldCheck, color: 'text-green-500' },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-bg-secondary border border-border-subtle">
                      <stat.icon className={`w-4 h-4 mb-2 ${stat.color}`} />
                      <div className="text-lg font-black text-text-primary">{stat.value}</div>
                      <div className="text-[10px] font-black text-text-tertiary uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-xs font-black text-text-tertiary uppercase tracking-widest mb-4">Enrollments</h4>
                  <div className="space-y-3">
                    {selectedUser.enrollments?.length > 0 ? (
                      selectedUser.enrollments.map((en: any) => (
                        <div key={en.id} className="p-4 rounded-xl border border-border-subtle bg-bg-primary flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-text-primary">{en.domain.name}</span>
                            <span className="text-[10px] text-text-tertiary">Enrolled on {formatDate(en.createdAt)}</span>
                          </div>
                          <Badge variant="secondary">{en.status}</Badge>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-text-tertiary italic">No active enrollments</p>
                    )}
                  </div>
                </div>
              </div>

              <DialogFooter className="bg-bg-secondary p-6">
                <Button variant="ghost" onClick={() => setIsDetailsOpen(false)}>Close</Button>
                <Button 
                  variant="destructive" 
                  onClick={() => { toggleBan(selectedUser.id); setIsDetailsOpen(false); }}
                >
                  {selectedUser.isBanned ? 'Unban Account' : 'Suspend Account'}
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UsersPage;
