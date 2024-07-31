import { supabase } from "./supabase";

const signUp = async (email: string, password: string) => {
  const { user, error }: any = await supabase.auth.signUp({email, password});
  return { user, error };
};

const signIn = async (email: string, password: string) => {
  const { user, error }: any = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { user, error };
};

const signInWithGoogle = async () => {
  const { user, error }: any = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173/chat",
    }
  });
  return { user, error };
};

export { signUp, signIn, signInWithGoogle };
