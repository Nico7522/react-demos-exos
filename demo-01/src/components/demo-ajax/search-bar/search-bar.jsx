import {useForm} from 'react-hook-form'

export default function SearchBar ({ onSearch }) {

    const {register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        onSearch(data.query.toLowerCase());
        reset();
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="query">Station : </label>
            <input type="text" {...register('query')}/>
            <button>Rechercher</button>
        </form>
    
}