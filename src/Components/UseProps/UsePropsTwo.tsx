import PropsDetails from "../../Tools/PropDetails";

export const UsePropsB = () => {
  const id = 12221;
  const category = "New Client";
  const name = "Johann Lake ";
  const text =
    " This is the second example of using Props in TypeScript-React application in which I used Tailwind CSS. Now, you can move on to UsState example by clicking the 'Next' button below.";
  const joined_date = new Date();
  return (
    <>
      <PropsDetails
        name={name}
        id={id}
        joined={joined_date}
        category={category}
        text={text}
      />
    </>
  );
};
export default UsePropsB;
