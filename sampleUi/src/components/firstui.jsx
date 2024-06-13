export const Login = () => {
  return (
    <div className="border-2 border-slate-500 rounded p-6 w-1/4 h-80 flex items-center justify-center flex-col">
      <form className="  flex items-center justify-center flex-col" action="">
        <h1 className="text-2xl text-center">Log in</h1>
        <div className="flex-col flex my-4">
          <label htmlFor="">Username:</label>
          <input
            className="bg-[#E2E1E1] rounded w-full p-1 border-[1px] border-[#000000]"
            type="text"
          />
          <label htmlFor="">Password:</label>
          <input
            className="bg-[#E2E1E1] rounded w-full p-1 border-[1px] border-[#000000]"
            type="Password"
          />
        </div>
        <button
          className="bg-[#171717] text-white py-1 px-5 rounded"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
};
