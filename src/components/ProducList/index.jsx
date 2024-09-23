/** @jsxImportSource @emotion/react */
import { Table } from "reactstrap";
import { FlexRow, Image, Text } from "../../styles/layout";
import { COLORS } from "../../styles/colors";
import { useAdmin } from "../../context/admin";
import { TextDescription } from "../Product/styles";
import { FaEdit } from "react-icons/fa";
import { Container } from "./styles";
import Badge from "../Badge";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { products } = useAdmin();
  const navigate = useNavigate();

  const handleClick = (event, id) => {
    event.stopPropagation();
    navigate(`${id}/edit`);
  }

  return (
    <Table
      css={Container}
      responsive
      hover
    >
      <thead>
        <tr>
          <td></td>
          <td>
            <Text
              align="start"
              weight={600}
              color={COLORS.gray}
            >
              Nombre
            </Text>
          </td>
          <td>
            <Text
              align="start"
              weight={600}
              color={COLORS.gray}
            >
              Descripción
            </Text>
          </td>
          <td>
            <Text
              weight={600}
              color={COLORS.gray}
            >
              Precio
            </Text>
          </td>
          <td>
            <Text
              weight={600}
              color={COLORS.gray}
            >
              Descuento
            </Text>
          </td>
          <td>
            <Text
              weight={600}
              color={COLORS.gray}
            >
              Porcentaje
            </Text>
          </td>
          <td>
            <Text
              weight={600}
              color={COLORS.gray}
            >
              Stock
            </Text>
          </td>
          <td>
            <Text
              weight={600}
              color={COLORS.gray}
            >
              Categoría
            </Text>
          </td>
          <td>
            <Text
              weight={600}
              color={COLORS.gray}
            >
              Marca
            </Text>
          </td>
          <td>
            <Text
              weight={600}
              color={COLORS.gray}
            >
              Estado
            </Text>
          </td>
          <td>
            
          </td>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product, index) => {
            const { images = [] } = product;

            return (
              <tr key={index} onClick={() => navigate(`${product.id}`)}>
                <th>
                  <Text
                    size={15}
                    weight={500}
                    color={COLORS.dim}
                  >
                  { index + 1 }
                  </Text>
                </th>
                <th>
                  <FlexRow
                    gap={0.2}
                    width="180px"
                    justify="flex-start"
                  >
                    <Image
                        width={55}
                        alt={`${product.name}`}
                        src={(images && images[0]) ? images[0]?.image.url : "/img/default_product.png"}                            
                    />
                    <TextDescription
                      lines={1}
                      height="18px"
                      size={15}
                      color={COLORS.dim}
                    >
                      { product.name }
                    </TextDescription>
                  </FlexRow>
                </th>
                <th>
                  <TextDescription
                    lines={3}
                    height="18px"
                    size={15}
                    color={COLORS.dim}
                  >
                    { product.description }
                  </TextDescription>
                </th>
                <th>
                  <Text
                    size={15}
                    weight={500}
                    color={COLORS.dim}
                  >
                    S/. { product.price }
                  </Text>
                </th>
                <th>
                  <Text
                    size={15}
                    weight={500}
                    color={COLORS.dim}
                  >
                    S/. { product.discount ? product.discount.price : 0 }
                  </Text>
                </th>
                <th>
                  <Text
                    size={15}
                    weight={500}
                    color={COLORS.dim}
                  >
                    { product.discount ? `-${product.discount.percentage}` : 0 }%
                  </Text>
                </th>
                <th>
                  <Text
                    size={15}
                    weight={500}
                    color={COLORS.dim}
                  >
                    { product.stock }
                  </Text>
                </th>
                <th>
                  <Text
                    size={15}
                    weight={500}
                    color={COLORS.dim}
                  >
                    { product.category.name }
                  </Text>
                </th>
                <th>
                  <Text
                    size={15}
                    weight={500}
                    color={COLORS.dim}
                  >
                    { product.brand }
                  </Text>
                </th>
                <th>
                  <Badge color={product.active ? "primary" : "danger"}>
                    { product.active ? "activo" : "inactivo" }
                  </Badge>
                </th>
                <th>
                  <FaEdit
                    onClick={(event) => handleClick(event, product.id)}
                    size={20}
                    style={{cursor: "pointer"}}
                    color={COLORS.dim}
                  />
                </th>
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
}

export default ProductList;