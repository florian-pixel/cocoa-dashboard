//import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { StandardCardCollection } from "./ui-components";
import logo from './assets/logoCocoaShield.png'
import { Flex, Divider, Button } from '@aws-amplify/ui-react';


function App() {
	return (
		<div className="App">
			<Flex className='flex-content-head' direction="column">
				{/* <Text>Before</Text> */}
				<img className='logo' src={logo} alt="" />
				<Divider />
			</Flex>
			<div>
			<br />
			<Flex className='flex-content-body' direction="row">
				<Flex direction="column">

					<Button size="large" loadingText="" onClick={() => alert('hello')}>
						Profil
					</Button>
					<Button size="large" loadingText="" onClick={() => alert('hello')}>
						Voir les champs
					</Button>
					<Button variation="primary" size="large" loadingText="" onClick={() => alert('hello')}>
						Voir les plants
					</Button>
					<Button size="large" loadingText="" onClick={() => alert('hello')}>
						Statistiques
					</Button>


				</Flex>
				<Divider orientation="vertical"  />
				<Flex className='flex-content-display' >
					{/* <div> */}
						<StandardCardCollection />
					{/* </div> */}
				</Flex>
			</Flex>

			</div>

		</div>

	);
}

export default withAuthenticator(App);
