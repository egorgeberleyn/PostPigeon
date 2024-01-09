class AuthInterceptor {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  intercept(request: any, invoker: any) {
    const metadata = request.getMetadata();
    metadata.Authorization = "Bearer " + this.token;
    return invoker(request);
  }
}

export const setAuthInterceptor = () => {
  const token = localStorage.getItem("token")?.slice(1, -1);
  const authInterceptor = new AuthInterceptor(token!);
  let options = {
    unaryInterceptors: [authInterceptor],
    streamInterceptors: [authInterceptor],
  };
  return { inteceptor: authInterceptor, options: options };
};
