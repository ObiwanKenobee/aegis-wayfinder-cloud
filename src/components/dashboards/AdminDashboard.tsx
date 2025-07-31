import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { Shield, BarChart3, Users, Settings, Activity, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">AEGIS Admin Portal</span>
            </div>
            <Badge variant="outline">Administrator</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {profile?.full_name || 'Admin'}
            </span>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                Across 12 fleet partners
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Trips</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,243</div>
              <p className="text-xs text-muted-foreground">
                +8% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">99.8%</div>
              <p className="text-xs text-muted-foreground">
                Uptime this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Administrative controls and system management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>User Management</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Activity className="h-6 w-6" />
                <span>Fleet Monitor</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BarChart3 className="h-6 w-6" />
                <span>Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Settings className="h-6 w-6" />
                <span>System Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent System Events</CardTitle>
              <CardDescription>Latest system activities and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: 'info', message: 'New fleet partner registered', time: '2 min ago' },
                  { type: 'warning', message: 'High demand in downtown area', time: '15 min ago' },
                  { type: 'success', message: 'System backup completed', time: '1 hour ago' },
                  { type: 'info', message: 'Software update deployed', time: '3 hours ago' },
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      event.type === 'success' ? 'bg-green-500' : 
                      event.type === 'warning' ? 'bg-yellow-500' : 
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{event.message}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fleet Partner Status</CardTitle>
              <CardDescription>Overview of registered fleet partners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'CityFleet Solutions', vehicles: 45, status: 'Active', revenue: '$12,450' },
                  { name: 'Metro Transport Co.', vehicles: 32, status: 'Active', revenue: '$8,920' },
                  { name: 'Urban Mobility Ltd.', vehicles: 28, status: 'Active', revenue: '$7,330' },
                  { name: 'Swift Transit Inc.', vehicles: 19, status: 'Maintenance', revenue: '$0' },
                ].map((partner, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{partner.name}</p>
                      <p className="text-sm text-muted-foreground">{partner.vehicles} vehicles</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={partner.status === 'Active' ? 'default' : 'outline'}>
                        {partner.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{partner.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;