export function formatarMoeda(valor) {
  // TODO: valide o valor e devolva a formatação monetária em pt-BR.
  if (!Number.isFinite(valor) || valor <= 0) {
    throw new TypeError("Digite um preço valído");
  }
  if (valor <= 0) {
    throw new TypeError("Digite um preço positivo");
  }

  return new Intl.NumberFormat("pr-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
