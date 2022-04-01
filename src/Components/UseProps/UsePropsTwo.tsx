import PropsDetails from "../../Tools/PropDetails";

export const UsePropsB = () => {
  const id = 12221;
  const category = "New Client";
  const name = "Johann Lake ";
  const joined_date = new Date();
  return (
    <>
      <PropsDetails
        name={name}
        id={id}
        joined={joined_date}
        category={category}
      />
    </>
  );
};
export default UsePropsB;
