import { TiHome } from "react-icons/ti";
import NavItem from "./NavItem";
import { BackDrop, Container } from "./styles";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { GiShoppingBag, GiWallet } from "react-icons/gi";
import { FaUserGroup, FaMoneyBillTransfer } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { RiMessage3Fill, RiLogoutBoxFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

function Aside({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();

  return (
    <>
      <Container isOpen={isOpen}>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin"
          Icon={TiHome}
        >
          Inicio
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/calendario"
          Icon={FaCalendarAlt}
        >
          Calendario
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/invitro"
          Icon={PiPottedPlantFill}
          isActive={pathname.includes("invitro")}
        >
          Invitro
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/productos"
          Icon={GiShoppingBag}
          isActive={pathname.includes("productos")}
        >
          Productos
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/pedidos"
          Icon={FaClipboardList}
          isActive={pathname.includes("pedidos")}
        >
          Pedidos
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/comprobantes"
          Icon={GiWallet}
          isActive={pathname.includes("comprobantes")}
        >
          Facturación
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/banners"
          Icon={MdDiscount}
          isActive={pathname.includes("banners")}
        >
          Banners
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/gastos"
          Icon={FaMoneyBillTransfer}
          isActive={pathname.includes("gastos")}
        >
          Gastos
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/clientes"
          Icon={FaUserGroup}
        >
          Clientes
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/mensajes"
          Icon={RiMessage3Fill}
        >
          Mensajes
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/login"
          Icon={RiLogoutBoxFill}
          isLogout
        >
          Salir
        </NavItem>
      </Container>
      {
        isOpen
        &&
        <BackDrop 
          onClick={() => setIsOpen(false)}
        />
      }
    </>
  );
}

export default Aside;
