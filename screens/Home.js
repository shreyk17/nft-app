import React , {useState} from 'react'
import { Text, View , SafeAreaView  , FlatList } from 'react-native'
import { NftCard , HomeHeader, FocusedStatusBar } from '../components'
import { COLORS , NFTData } from '../constants'

const Home = () => {

	const [nftData, setNftdata] = useState(NFTData)

	const handleSearch = (value) => {
		if(value.length === 0){
			return setNftdata(NFTData)
		}

		const filteredData = NFTData.filter((item) => 
			item.name.toLowerCase().includes(value.toLowerCase())
		)

		console.log(filteredData)

		if(filteredData.length) {
			setNftdata(filteredData)
		}else {
			setNftdata(NFTData)
		}
	}
  
  return(
    <SafeAreaView style = {{ flex : 1 }}>
		<FocusedStatusBar backgroud = {COLORS.primary} />

		<View style = {{flex:1}}>
			<View  style = {{zIndex : 0 }}>
				<FlatList
					data={nftData}
					renderItem = {({ item }) => <NftCard data = {item} /> }
					keyExtractor = {(item) => item.id}
					showsHorizontalScrollIndicator = {false}
					ListHeaderComponent = {<HomeHeader onSearch={handleSearch} />}
				/>
			</View>
			<View style = {{
				position : 'absolute',
				top : 0,
				bottom : 0 ,
				right : 0 , 
				left : 0,
				zIndex : -1
			}}>
				<View style = {{height : 300  ,backgroundColor : COLORS.primary}} />
				<View  style = {{flex : 1 , backgroundColor : COLORS.white}} />
			</View>
		</View>

    </SafeAreaView>
  )
  
}

export default Home