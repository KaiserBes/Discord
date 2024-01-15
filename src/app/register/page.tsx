export default function RegisterPage() {
  return (
    <>
      <div className="bg-blue-600 h-screen flex items-center justify-center">
        <div className="bg-gray-700 p-12 rounded-lg shadow-md w-96">
          <h2 className="text-3xl text-white font-bold mb-6 text-center">
            Создайте аккаунт
          </h2>
          <form>
            <div className="mb-6">
              <label htmlFor="username" className="block text-white text-lg">
                Имя пользователя
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-2 p-3 w-full border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-lg">
                Электронная почта
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-3 w-full border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-lg">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2 p-3 w-full border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none text-lg"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
