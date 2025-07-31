import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { Car, MapPin, Clock, Route, LogOut } from 'lucide-react';

const PassengerDashboard = () => {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">AEGIS Passenger</span>
            </div>
            <Badge variant="outline">Passenger</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {profile?.full_name || 'User'}
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
        {/* Quick Action */}
        <Card className="border-accent">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Request Transportation</CardTitle>
            <CardDescription>
              Summon an autonomous vehicle to your location
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button size="lg" variant="hero" className="px-12 py-6 text-lg">
              <MapPin className="h-6 w-6 mr-3" />
              Summon Vehicle
            </Button>
          </CardContent>
        </Card>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Trips</CardTitle>
              <Route className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">284 km</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Trip Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18 min</div>
              <p className="text-xs text-muted-foreground">
                Average duration
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Trips */}
        <Card>
          <CardHeader>
            <CardTitle>Trip History</CardTitle>
            <CardDescription>Your recent transportation requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { from: 'Home', to: 'Downtown Office', time: '2 hours ago', status: 'Completed' },
                { from: 'Shopping Mall', to: 'Home', time: 'Yesterday', status: 'Completed' },
                { from: 'Airport', to: 'Hotel', time: '3 days ago', status: 'Completed' },
              ].map((trip, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">{trip.from} → {trip.to}</p>
                    <p className="text-sm text-muted-foreground">{trip.time}</p>
                  </div>
                  <Badge variant="outline">{trip.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PassengerDashboard;