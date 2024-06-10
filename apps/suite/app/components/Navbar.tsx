export const Navbar = () => {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return <nav className="">17 - suit {currentDateTime}</nav>;
};
