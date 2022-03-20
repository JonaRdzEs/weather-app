export default function FahrenheitIcon({isActive}){
  return(
    <svg style={{fill: isActive ? "#110E3C" : "#FFFFFF"}} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 20v-15h9v3h-6v3h5v3h-5v6zm-5-17a3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3-3 3 3 0 0 1 3-3m0 2a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0 -1-1z"/></svg>
  );
}