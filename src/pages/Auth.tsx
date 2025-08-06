import { AuthForm } from "@/components/AuthForm";
import { Header } from "@/components/Header";

const Auth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;