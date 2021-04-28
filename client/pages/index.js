import axios from 'axios';

const LandingPage = ({ color }) => {
  return <h1>Lading Page1</h1>
};

LandingPage.getInitialProps = ({ req }) => {
  console.log(req.headers);
  if (typeof window === 'undefined') {
    // we are on the server
    // requests should be made to http://ingress-nginx.ingress-nginx.dev
    // 'http://SERVICENAME.NAMESPACE.svc.cluster.local'
    const { data } = await axios.get(
      'http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser', {
        headers: {
          Host: req.headers
        }
      }
    );


    return data;
  } else {
    // we are on the browser
    const { data } = await axios.get('/api/users/currentuser');
    // { currentUser: }
    return data;
  }


  return {};
};


export default LandingPage;