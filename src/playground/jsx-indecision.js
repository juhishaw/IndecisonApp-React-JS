console.log('App.js is running!');

//JSX - Javasript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        console.log(option);
        e.target.elements.option.value = '';
        renderOptions();
    }else{
        alert('Add Item');
    }
};

//Reset Options Length
const resetOptions = () =>{
    app.options = [];
    renderOptions();
};

//Random Selection
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNum];
    alert(selectedOption);
    console.log(randomNum);
};

const renderOptions = () =>{
    const template =  (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={resetOptions}>Reset</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}> {option} </li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderOptions();