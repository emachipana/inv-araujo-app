import { Fragment } from "react";
import { ProductSection } from "../../pages/admin/Order/styles";
import { FlexColumn, Text } from "../../styles/layout";
import { Input } from "reactstrap";
import { ClientSection } from "./styles";
import { COLORS } from "../../styles/colors";
import { TextDescription } from "../Product/styles";

function Client({ id, rsocial, document, department, city, setClientSelected, clientSelected }) {
  const handleChange = () => {
    setClientSelected(id);
  }

  return (
    <Fragment>
      <ClientSection
      >
        <Input 
          type="radio"
          id={id}
          name="clients"
          defaultChecked={clientSelected === id}
          onChange={handleChange}
        />
        <ProductSection htmlFor={id}>
          <FlexColumn gap={0.1}>
            <TextDescription
              width="100%"
              color={COLORS.gray}
              size="16px"
              lines={1}
              style={{textTransform: "capitalize"}}
              weight={600}
            >
              { document } - {rsocial.toLowerCase()}
            </TextDescription>
            <Text
              size={14}
              color={COLORS.dim}
              weight={600}
            >
              Destino habitual: {city}, {department}
            </Text>
          </FlexColumn>
        </ProductSection>
      </ClientSection>
    </Fragment>
  );
}

export default Client;
