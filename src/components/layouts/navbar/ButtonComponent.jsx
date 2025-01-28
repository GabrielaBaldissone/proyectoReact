export default function ButtonComponent({texto}) {
    const mostrarAlert = () => {
      alert(`Ingresaste a la seccion ${texto}`);
    };
  
    return (
      <>
        <button onClick={mostrarAlert} className="btn btn-outline-secondary" style={{margin: '20px'}}>
          {texto}
        </button>
      </>
    );
  }
  