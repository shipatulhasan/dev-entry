// app/login/page.tsx

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 shadow p-8 rounded-xl">
      <h1 className="text-3xl font-bold mb-6">
        Login
      </h1>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded w-full">
          Sign In
        </button>
      </form>
    </div>
  );
}