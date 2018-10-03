import React from 'react';
import { connect } from 'react-redux'
import { updateSearchString } from "./pokemonReducer"


const SearchForm = ({searchstring, dispatchUpdateSearchString}) => {
	return (
	<form>
		<input type="text" placeholder="pokemon number" value={searchstring} onChange={dispatchUpdateSearchString} />
        <button>Search</button>
	</form>
	);
};

const mapStateToProps = state => ({
	searchString: state.searchString,
});

const mapDispatchToProps = dispatch => ({
	dispatchUpdateSearchString: e => dispatch(updateSearchString(e.target.value))
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(SearchForm);