export const cors = (
  request: any, response: {
     setHeader: (key: string, value: string) => void; 
    }, next: () => void) => {
  response.setHeader('Access-Control-Allow-Origin', 'https://feedback-widget-web-production-dev-luis.up.railway.app/');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '10');
  next();
};
