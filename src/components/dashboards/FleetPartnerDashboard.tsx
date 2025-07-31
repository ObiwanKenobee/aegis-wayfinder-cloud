import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { Truck, Users, CheckCircle, XCircle, Clock, LogOut } from 'lucide-react';

const FleetPartnerDashboard = () => {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">AEGIS Fleet Partner</span>
            </div>
            <Badge variant="outline">Fleet Partner</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {profile?.full_name || 'Partner'}
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
        {/* Fleet Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Out of 12 total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trip Requests</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                Today
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">
                Success rate: 95%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,840</div>
              <p className="text-xs text-muted-foreground">
                Today
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trip Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Trip Requests</CardTitle>
            <CardDescription>Review and manage incoming transportation requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'TR001', from: 'Downtown', to: 'Airport', passenger: 'John Smith', time: '2 min ago', price: '$45' },
                { id: 'TR002', from: 'Mall', to: 'University', passenger: 'Sarah Johnson', time: '5 min ago', price: '$28' },
                { id: 'TR003', from: 'Hotel', to: 'Conference Center', passenger: 'Mike Wilson', time: '8 min ago', price: '$35' },
              ].map((request, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{request.id}</Badge>
                      <span className="font-medium">{request.passenger}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {request.from} → {request.to}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {request.time}
                      </span>
                      <span>{request.price}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <XCircle className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                    <Button size="sm" variant="hero">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fleet Status */}
        <Card>
          <CardHeader>
            <CardTitle>Fleet Status</CardTitle>
            <CardDescription>Monitor your vehicle fleet in real-time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'AV001', status: 'Active', location: 'Downtown District', passenger: 'Emma Brown', eta: '12 min' },
                { id: 'AV002', status: 'Available', location: 'Shopping Center', passenger: null, eta: null },
                { id: 'AV003', status: 'Active', location: 'Airport Route', passenger: 'David Lee', eta: '8 min' },
                { id: 'AV004', status: 'Maintenance', location: 'Service Center', passenger: null, eta: null },
              ].map((vehicle, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Badge variant={vehicle.status === 'Active' ? 'default' : vehicle.status === 'Available' ? 'secondary' : 'outline'}>
                      {vehicle.status}
                    </Badge>
                    <div>
                      <p className="font-medium">{vehicle.id}</p>
                      <p className="text-sm text-muted-foreground">{vehicle.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {vehicle.passenger && (
                      <p className="text-sm font-medium">{vehicle.passenger}</p>
                    )}
                    {vehicle.eta && (
                      <p className="text-xs text-muted-foreground">ETA: {vehicle.eta}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FleetPartnerDashboard;