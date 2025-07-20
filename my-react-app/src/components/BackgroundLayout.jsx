function BackgroundLayout({ children, bgImage }) {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
}

export default BackgroundLayout;
