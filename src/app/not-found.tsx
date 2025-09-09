export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="flex flex-col w-[80%] break-words items-center justify-center text-[var(--violet-light)] font-black text-center">
        <h1 className="lg:text-8xl text-6xl">404</h1>
        <p className="lg:text-6xl text-4xl">Страница не найдена</p>
      </div>
    </div>
  );
}
