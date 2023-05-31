import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem =styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>PABILIFY</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci commodi officia esse voluptate totam alias facilis laborum nulla nihil nobis, 
                minus placeat facere, temporibus, dolore autem? Quod numquam accusantium ipsa?
            </Desc>
            <SocialContainer>

                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>

                <SocialIcon color="0000FF">
                    <LinkedInIcon/>
                </SocialIcon>

            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Toys</ListItem>
                <ListItem>Clothing</ListItem>
                <ListItem>Mugs</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>

            <Title>Contact</Title>

                <ContactItem>
                <LocationOnIcon style={{marginRight:"10px"}}/> 1304 C.M. Recto Avenue Manila City
                </ContactItem>
                
                <ContactItem>
                <LocalPhoneIcon style={{marginRight:"10px"}}/>+639956694967
                </ContactItem>

                <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}}/>contactpabilify@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

        </Right>
    </Container>
  )
}

export default Footer