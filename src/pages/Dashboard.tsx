import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import PassengerDashboard from '@/components/dashboards/PassengerDashboard';
import FleetPartnerDashboard from '@/components/dashboards/FleetPartnerDashboard';
import AdminDashboard from '@/components/dashboards/AdminDashboard';
import { Skeleton } from '@/components/ui/skeleton';

const Dashboard = () => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Skeleton className="h-12 w-64" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
          <Skeleton className="h-64" />
        </div>
      </div>
    );
  }

  // Redirect to auth if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Default role if profile not loaded yet
  const userRole = profile?.role || 'passenger';

  const renderDashboard = () => {
    switch (userRole) {
      case 'admin':
        return <AdminDashboard />;
      case 'fleet_partner':
        return <FleetPartnerDashboard />;
      case 'passenger':
      default:
        return <PassengerDashboard />;
    }
  };

  return renderDashboard();
};

export default Dashboard;