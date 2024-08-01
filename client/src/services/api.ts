import { supabase } from "./supabase";

const signUp = async (email: string, password: string) => {
  try {
    const { user, error }: any = await supabase.auth.signUp({
      email,
      password,
    });
    return { user, error };
  } catch (error) {
    return { error };
  }
};

const signIn = async (email: string, password: string) => {
  try{
    const { user, error }: any = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { user, error };
  }
  catch (error) {
    return { error };
  }
};

const signInWithGoogle = async () => {
  try{
    const { user, error }: any = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/chat",
      },
    });
    return { user, error };
  }
  catch (error) {
    return { error };
  }
};

export { signUp, signIn, signInWithGoogle };
