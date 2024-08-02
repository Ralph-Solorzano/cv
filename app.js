let state = (function () {
    let input = {};
  
    const setInput = payload => (input = payload);
    const getInput = () => input;
  
    return { setInput, getInput };
  })();
  
  const { setInput, getInput } = state;
  
  const handleChange = (e) => {
    let result = {};
    result = { ...getInput(), [e.target.name]: e.target.value };
    setInput(result);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ralphs first site");
    console.log("form values", getInput());
  };
  