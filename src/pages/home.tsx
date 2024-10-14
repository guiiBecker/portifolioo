import ButtonHomePage from '../components/homebutton';
import Feed from '../components/feed';
import MainLayout from '../components/mainlayout';
import Text from '../components/text';

export default function Home() {
  return (
    <div className="Home">
      <MainLayout>
        <Text></Text>
        <Feed></Feed>
        <ButtonHomePage></ButtonHomePage>
      </MainLayout>
    </div>
  );
}