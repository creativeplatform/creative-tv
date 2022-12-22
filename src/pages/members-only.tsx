import console from 'console';
import { NextPage, GetServerSideProps } from 'next';
import { siwe } from './api/siwe/siwe';

const walletHasToken = async (address: string): Promise<boolean> => {
  return true; 
  // Your implementation of token-gated logic goes here
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { address } = await siwe.getSession(req, res);

  if (!address || !(await walletHasToken(address))) {
    return {
      redirect: {
        permanent: false,
        destination: '/login', // Redirect if wallet does not have the required token
      },
    };
  }

  return {
    props: {},
  };
};

const MembersOnlyPage: NextPage = () => {
  return <>Welcome, collector.</>;
};

export default MembersOnlyPage;
