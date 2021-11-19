const Form = props => {

    function handleSubmit(e) {
      e.preventDefault();
      console.log('submetido');
      props.onSubmit();
    };
  
    return (
      <form autocomplete="off" onSubmit={handleSubmit} >
        {props.children}
      </form>
    );
  
  };

  export default Form;