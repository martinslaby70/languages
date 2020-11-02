interface ICountryLanguage {
    languages: [{
        name: string,
        code: string,
        native?: string
    }]    
}

export default ICountryLanguage