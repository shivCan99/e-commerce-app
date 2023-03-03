import styled from 'styled-components';

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  animation: color-change 0.8s infinite;
  @keyframes color-change {
    0% { color: blue; }
    50% { color: yellow; }
    100% { color: blue; }
  }
`;



const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcements