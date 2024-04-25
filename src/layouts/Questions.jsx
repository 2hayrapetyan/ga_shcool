import DropDown from "../components/DropDown";

function Questions() {
  return (
    <>
      <div className='question-parent'>
        <h3>Frequently asked questions</h3>
        <DropDown
          title='Are the classes online or offline?'
          content='Classes are only online .'
          style={{ marginBottom: "24px", marginTop: "40px" }}
        />
        <DropDown
          title='Are online classes as useful as offline?'
          content='Yes, of course, the success depends on teacher’s methodology and your hard work.'
        />
      </div>
      <style>
        {`
            .question-parent{
                padding: 133px 0 173px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .question-parent h3{
                font-size: 32px;
                font-weight: 700;
            }
            `}
      </style>
    </>
  );
}

export default Questions;
