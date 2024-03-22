

function Logo({ position, fontSize }) {
  return (
    <div style={{ width: "fit-content", height: "fit-content", position: "relative" }}>
      <div
        style={{
          left: position + 22,
          top: 0,
          color:'white',
          fontFamily:'Khula',
          position: "absolute",
          fontSize: fontSize // Ajoutez cette ligne pour définir la taille de la police
        }}
      >
        SATSO
      </div>
      <div
        style={{
          
          left: position,
          top: 0,
          position: "absolute",
          color: "#95B6CE",
          fontFamily:'Khula',
          fontSize: fontSize // Ajoutez cette ligne pour définir la taille de la police
        }}
      >
        IS
      </div>
    </div>
  );
}

export default Logo;



