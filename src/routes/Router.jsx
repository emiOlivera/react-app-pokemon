import { Route, Routes } from "react-router-dom";
import Dragon from "../componentes/Dragon";
import Bug from "../componentes/Bug";
import Electric from "../componentes/Electric";
import Fairy from "../componentes/Fairy";
import Fighting from "../componentes/Fighting";
import Fire from "../componentes/Fire";
import Ghost from "../componentes/Ghost";
import Grass from "../componentes/Grass";
import Ground from "../componentes/Ground";
import Ice from "../componentes/Ice";
import Normal from "../componentes/Normal";
import Poison from "../componentes/Poison";
import Psychic from "../componentes/Psychic";
import Water from "../componentes/Water";
import Rock from "../componentes/Rock";
import { Navigate } from "react-router-dom";
import PokeNavBar from "../NavBar/PokeNavBar";
import Search from "../componentes/Search";
import DetallePokemon from "../componentes/DetallePokemon";

const Router = () => {
  return (
    <>
    <PokeNavBar/>
    <Routes>
      <Route path="inicio" element={<Search/>} />
      <Route path="bug" element={<Bug />} />
      <Route path="dragon" element={<Dragon />} />
      <Route path="electric" element={<Electric />} />
      <Route path="fairy" element={<Fairy />} />
      <Route path="fighting" element={<Fighting />} />
      <Route path="fire" element={<Fire />} />
      <Route path="ghost" element={<Ghost />} />
      <Route path="grass" element={<Grass />} />
      <Route path="ground" element={<Ground />} />
      <Route path="ice" element={<Ice />} />
      <Route path="normal" element={<Normal />} />
      <Route path="poison" element={<Poison />} />
      <Route path="psychic" element={<Psychic />} />
      <Route path="water" element={<Water />} />
      <Route path="rock" element={<Rock />} />
      <Route path="/" element={<Navigate to="inicio" />} />
      <Route path="*" element={<Navigate to="inicio" />} />
      <Route path="detalle" element={<DetallePokemon/>} />
    </Routes>
    </>
  );
}

export default Router;
