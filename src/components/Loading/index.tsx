import { FC } from 'react';
import Spinner from './Spinner';

const Loading: FC = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="w-full max-w-44">
        <Spinner />
      </div>
    </div>
  );
};
export default Loading;
