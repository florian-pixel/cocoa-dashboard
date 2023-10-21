//import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { ComposantItemPlantation } from "./ui-components";
import logo from './assets/logoCocoaShield.png'
import { Flex, Divider, Button } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { useAuth } from "@aws-amplify/auth";




function App() {
	const { user } = useAuth();

	const plantations = useQuery(
		"plantations",
		(query) => query.where({ owner: user.username }),
	);



	// async function user() {
	// 	try {

	// 		await Auth.currentAuthenticatedUser()
	// 		.then((obj) => {
	// 			return obj.attributes.name
	// 		})


	// 	}
	// 	catch (error){
	// 		console.log("error getting list: ", error)
	// 	}
	// }
	// console.log('List user: ', Auth.currentAuthenticatedUser({bypassCache: true}))

	async function signOut() {
		try {
		  await Auth.signOut();
		} catch (error) {
		  console.log('error signing out: ', error);
		}
	}

	return (
		<div className="App">
			<Flex className='flex-content-head' direction="column">
				{/* <Text>Before</Text> */}
				<img className='logo' src={logo} alt="" />
				<Divider />
				Bonjour {}
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
					<Button size="large" loadingText="" onClick={() => signOut()}>
						Déconnexion
					</Button>



				</Flex>
				<Divider orientation="vertical"  />
				<Flex className='flex-content-display' >
					<div>
					{
						plantations.items.map((plantation) => (
        				<ComposantItemPlantation key={plantation.id} plantation={plantation} />
     				))}
					</div>
				</Flex>
			</Flex>

			</div>

		</div>

	);
}

export default withAuthenticator(App);
