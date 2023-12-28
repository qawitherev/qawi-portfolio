export function Heading1(props) {
  const { data } = props;
  return (
    <>
      <h1 className="text-3xl m-1">{data}</h1>
    </>
  );
}

export function Heading2(props) {
  const { data } = props;
  return (<>
    <h1 className="text-xl m-1">{data}</h1>
  </>)
}

export function Heading3(props) {
    const {data} = props
    return (<>
        <h1 className="mb-1 font-ibm-sans">{data}</h1>
    </>)
}
