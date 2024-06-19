function BottomFooter() {
  return (
    <div className="px-2">
      <div className="BottomFooter py-3 flex flex-col-reverse flex-wrap-reverse gap-4 sm:max-w-7xl sm:mx-auto sm:flex-row sm:justify-between text-sm">
        <p>&#169; 2024 Paryatanam Bharati. All rights reserved.</p>
        <div className="flex flex-col sm:gap-4 sm:flex-row ">
          <a href="" className=" hover:underline">
            Privacy Policy
          </a>
          <a href="" className=" hover:underline">
            Terms & Condition
          </a>
          <a href="" className=" hover:underline">
            Cookies Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
