'use client';

import AuthForm from '@/components/AuthForm/AuthForm';

export default function Auth() {
  return (
    <main className="min-h-screen grid bg-auth-bg bg-cover  bg-no-repeat bg-bottom bg-after after:bg-black after:bg-opacity-30 after:backdrop-filter after:backdrop-blur-sm">
      <div className="z-10 items-center flex h-full w-full ">
        <AuthForm />
      </div>
    </main>
  );
}
