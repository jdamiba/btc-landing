export default function SignUp() {
  return (
    <div className="flex flex-col pt-[0px] mt-[75px] border-t-5 px-4 md:px-8">
      <h1 className="text-[67px]">
        <b>SIGN UP</b>
      </h1>
      <input
        className="border-[2px] rounded-[20px] p-4 border-[#D9D9D9] mb-[30px]"
        type="text"
        placeholder="First Name"
      />
      <input
        type="text"
        className="border-[2px] rounded-[20px] p-4 border-[#D9D9D9] mb-[30px]"
        placeholder="Last Name"
      />
      <input
        type="email"
        className="border-[2px] rounded-[20px] p-4 border-[#D9D9D9] mb-[30px]"
        placeholder="Email"
      />
      <button className="bg-black text-white max-w-[100px] rounded-[5px] p-1">
        SUBSCRIBE
      </button>
    </div>
  );
}
