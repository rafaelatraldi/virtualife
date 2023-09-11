feedPet = () => {
    this.setState((prevState) => ({
      pet: {
        ...prevState.pet,
        fome: prevState.pet.fome - 10, // Reduz a fome em 10 (ajuste conforme necessário)
      },
    }));
  };
