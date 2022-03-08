import './styles.css';

export default function Button({ classNameProp }) {
  return (
    <button type="button" className={classNameProp}>
      View Recipe
    </button>
  )
}
