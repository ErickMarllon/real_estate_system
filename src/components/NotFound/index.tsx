import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="py-[12dvh] flex flex-col items-center justify-center w-full px-5 text-md text-cyan-950  ">
      <h1 className=" text-lg font-semibold">Página não encontrada!</h1>
      <p className="w-96 text-center">
        Lamentamos, mas a página que você está procurando não foi encontrada!
      </p>

      <div className="w-full flex items-center justify-center mt-5">
        <span className="bg-notFound-bg h-80 w-full md-w-6/12 max-w-3xl bg-cover bg-center bg-no-repeat" />
      </div>

      <p>
        <Link href="/" className="hover:text-cyan-700 p-4">
          Retornar à página inicial
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
