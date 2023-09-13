import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  showData = [];
  qntEstados = 0
  imagensRegiao = [
    {"nome": "Norte", "imagem": "data:image/jpeg;base64,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"},
    {"nome": "Nordeste", "imagem": "data:image/jpeg;base64,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"},
    {"nome": "Centro-Oeste", "imagem": "data:image/jpeg;base64,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"},
    {"nome": "Sudeste", "imagem": "data:image/jpeg;base64,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"},
    {"nome": "Sul", "imagem": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhEQEhIWFRUVFhUVFxYVFRUaFhUVFhYWFhUXGBYYHiggGholHRUVITMiJTUrLjAuFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPMA0AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADwQAAIBAgQDBgQEAwcFAAAAAAECAAMRBBIhMQVBUQYTImFxgRQykaGxwdHwI1LhFUJicoKS8QcWJDTC/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xAAzEQACAQMCBAMHAwQDAAAAAAAAAQIDESEEMRJBUWEFE3EigZGhsdHwBsHxFCMyUkJi4f/aAAwDAQACEQMRAD8A+4xEQBERAEREAREQBERAExeYY21kXWxzN8vhHXmfrtK2q1dHTQ46srL6+iNoxcnZHdVxaroTr0GpHqBtPPxqfzj25evQesiPP6nmfUxPNT/VUVJ8NK65Xdn8FF/UsLTdWS741ALhgegBFz6C880sch3OX/Np99jIq0TV/qpcStSxzzn3Oy+aH9N3J/MN7zN5Xso6L/tE2UqrLorWHQWI+hl6n+ptJOSUlKK62T+jbNHp5InokZS4jYWYEnlYWuPfS82f2ivRh/pJ9tP+J2aeroTipKcbNX3S+pE4tO1jvicVLHqWC2YXvYkAAkct73nYJPGcZq8XddjWxmIibAREQBERAEREAREQBERAERNOKqZUY+Rt68oBox9YBStxmbQDy5n0kYYt/Xz9ZifOfGvFP62aUFaMb27vqX6NPgQiInDJhERAEREAREQARO3hlfU0ySdMy3JJtexF+djb6zim7AkCqpPMMo02Oh+4H2E9F+nNTOOqVLi9lp45XtfbqQV43jcmhMzAmZ9AKIiIgCIiAIiIAiIgCIiAYMjMXir+EDQEG/Wxvp7jf/mSZkHXtma21z+/S95yPG9VU02kc6bV9s9+nclpRUpWZ4mIifNDoCIlG/6j8WqUK3D6a4s4WnVeqtWoApsoVSpOYHn+Ms6XTPUVFTi7Ozeb8k3yu+XJGspcKuXmJReyHaGu1DFOxOLSliDTo1vBR7ymFuzMzWWwOl+d/p1jt5S+Gr4nunJo1loOitSa7sygFHU5WHiGunOTS8OrcbhGzaaWGudrYdmt0rtb43NVUTVy3xICr2hqCmKvwlRLswtVq0KWVRlysxZiBmzGwudjOA9vKTUcFXpUK1QYp6lNUXu84enuLE2OoNjccjNY6GtLMVf0cXyb5Pom872Y8xFuiVvhvac4ijiHTD1UqUahovSZqSsrAA5s7HKAAb3PTnNfYXidF6dTC0kZWwzBamZ6dTOzgsX72mcrljcnbXS0S0VSMZOSzHdYeOrze2Vm1nfcypp2LRMBirK67ry5FTbMPI6bzMSPS6mpp6qq091+WfqZlFSVmTdCsHAYHQzdIrhhOZlHy2DEdGO1j7XkpPqWmrqvSjVStxJM5slZ2MxEScwIiIAiIgCIiAIiIBrqvlBY7AXkGx676k+pNz95K8QPgI6kfiJEzyX6qrtQp0lzu37sL6v4FnTRvdiIieKLgkFx7s6MVXwVcuAuGd3NMpmFTOoFtTpa3QydiTUa86MuKDzlfFWNZRTVmQPans58UlBEdaZoVUqoDTD0iVuMr0ri669RIk9hSaWKpHEJfEYiliLpRyqndlTlCB9jl3vpeXSJPS19alFRg7W2wns+LmnzVzV04t3ZXu0HZs4jEYbFLURWoBky1aQq02V/mIUsMr6b6yO4T2G7inw+n8QG+ErVat+7t3ne38PznLa++t/KXKJmPiFdQ4E8ei6SXT/s/iPLV7lNx3YfvFxS9/Y1sWuLW9O6KRl/huhb+Ivh/wAMkuzXZ04atiq7VFc4g0iVSkKaoaaZTlAY6G9/zO8sETEtfWlTdNvDxstsdr8ls/3uVOKdxERKZIEdlzBGK5jc6KdbAcx5Ce1r1ALd4/uEP/zvPETqQ8a10IqMajslZbfYi8mHQkeG1XYNmIaxsDax2BNwNOc7xK8A2tncakixta+/r7+U7uGYgC1I5iwuQTmPg3BLe9tTfSe50Himn1L8uEm5JJu6tfCvb39u+2SnOm45ZKRETqEYiIgCIiAIiIBFcUJDAm+W2/IG5vfpfScZpvpakxGmvhG/QXv9bSwEQROZqPCNNqKrq1k5PazbsvRK3zuSKrKKsiuo977gjQgggg+YP47T1N/EVtVvsGVQDyLKWJHrY/YzRPC+L6KOk1Lpwvw2ur/xmxcpT4o3ERE5ZKIiJgCImZkGImHcAEk2AFyTyE1pikIuHW17b2195NT01WpHijFtXthN56Y5mvEjbE0LjaZIAdCTtrv7zfFbTVqNvNg436pr6oKSewiaq+KVPmPnoCTb0AM5m4tTGhz/AOwySGh1E48UYO3WzS+LwYdSC3Z3hSdFFzrYdf0ElsHh8g6k7n8vScvB7MnefzbXGoA0/G59xJMT33g/hsNHSUmvbksvpzsu23q0UqtRyfYzEROyRCIiAIiIAiIgCIiAcPFmApO3Mar/AJtl+5lSPGm0sqDre+3oNvvLJ2kBNIAD+8PbQ2+9h7yiD99J5zxzg46alBPfdPqu6+D+THmSjsyyjilO17t6W/YmaXEqZ5ldbeLn7i4nzziXHimIGFQUQ2QPfEVTTDZjlC07KczXB6TpxHHKdIDvg6eFS5CO1OmSPlaqq5dzbfn5zhvQ0cf23d22k756Yfuun0vckWpqdj6FTrK3ysh9HBnufOOIdpsNRdqdWpZkykjIx0cXBzAbWnVh+2TDEthbVCopI4qBGIswJ3ymygD5jpe43Ejn4NxK8OKL39tNprGzjG98rHD9Myx1X+yL6JF4zi+U5VVT5m5vy2085C8K7YpUcUjnDZc2WrSemWUaFhdRcXI/CRnGOMu2J+Hw9JWqZDVc1GK0kQsQLsoY5ibm3qfTbS+HeUpSnwydk1va3NuL4fc3h7K7MVdRdexgn8VxJnXKbeymx+pJ0nGHPX7a/WRNXi4pKpro6NZiwppUqIgViMxdVsFIF/FbT0mgdoVOJp0FVmSpRWqtRUcg52sNhYJa2p2OktKNZ4grJJ/44Vnl7b3v3bxySKkpSk7smwx6/pOmlj6irlDaeouP8p5fvaQmG45SdxSGdWILqHpVEzhdymcDMPScZ7U0XRXoMGBempzLUUAVHKDZT4rjb62veYpU61nwxxu8XXZ5TS7PffJhcS2LAzk7kk9SSb+s8SG/7owveGl3njFU0SMj6VAbWJta19AZ2f2zRWslJy6lnFIM1OoKZqE6L3hGW5It9fbSVCrOa4k7vquvfp/CGT6H2XDd3dmJ5Af3Rz089fsZOTj4aUNNTT+UjpbW5vfzvedk9xThwRUd7JIkERE3AiIgCIiAIia6tUKCzGwEA2TyWkXiuMKvy+Lz2W/56dJEY3ijVCCPDa4sCbWO9+uwkVStCG7JadGc3hG/j/Fhl7unrzY2NrqRZbkW319FlYFE2vy015a+ckDMTkaqMNRJOpfHJPHrtf5ll6Bf7fIqXaHgNXEhqZGHKupVTUpkvSYgqSjg2LbsL22OusjuJdka1RTTFfMncpSTO9XwMi5SbU2CNmsCSb210l/E8lBe9hf0kapQjFRg2rej9+0Wn6WXbcxLQP8A4y+RTsVwB2fHNmUfEUEpKDfwlUZbt5eKel4PWWsKqVFAbDpQfRsylMxDodj82zDlLb3K9PoTbz0+k0VsOdLD3Fr7D5gPO+sgqaetb+3JS7NJXWF3TxvnYrVNLUpq+/oVLg3Z6pSrU69SoGK03RjnqszsxQ5znYgXykkAD3nXjuGVPiBisO6BjT7p0qhjTdQ2ZTdDcMDfroeUnGpEfn5fr6ia5z61SvGdqis7Ws1y9NvevcV3e+Sv8S4LXrFc1dWGRlZf4yIGLEqyim4LWBC+I8r87TGD4FVpVMLVWon8PCphXBDbLY50PXfQywxNXqqjSTt8DFytcM7O1Uq061SqrlBUVmz1i1TMoAazsVU76Ae5maHZx1wWHwhqLmpVFct4spC1TUsOd7G0skTMtZVkkm9s7c8/d7dcYshcra9nHFPEJnS9XG/FD5rBe8R8p8/CRp1njE9nKr1u8asGAxFOsmZq11RHVjSCg5BaxsbE7bSzzMxHV1Iu6332Fy8cDx4cGne7IAbAEWUkganQnTlaTAMp/B8a7sKY8QLKTqykaXOUg7eFiR+suAns6NWNSClF3/M/MluZiIkwEREAREiuKcRyA5R08WhHmLX1P6zDdldmUm3ZHXisYtMeI6725yvcQ4oal1tYXNuoGlifPfaceKxLVDdjf96TTOfV1TeI7dTo0dIo2lPfoYtEzEpl0REQYEzMRAEzMRAAM5sRh73Yfv8AKdUTEoRnHgmrr6enRkNbTwqrO/UiiLaGYnbicPe7D6dJxzhamg6E+F7PZ9f/AFbM4s6coS4ZGIiJARiInujTzMB1P/M2UXJqK3YLZ2XwBW7sBqPD11NyfwliE5uHUstNF6KPrznVPeUqcaUFCOyJhERJAIiR/EscKamxBbpcXGh1tMN2yzKTbsjxxXH92CA1m9L2H6ysPUJ/C3Ll9tIquWJP26TzOXXrubxsdWhp1TWdzERMXlcsmYmLzMARMTN4AiIgwIiIMiJiZgGDMFBe9j/uaepibqclhM0lCMv8kmeKirl1uP8AFpffTlY+nlOKqBewvpca2voTqbabTrxVra+dvtr+XvOXDYZqjBVFyfLaUdfUcuGko3cs9+asrLnz+XU5GrUVPgikrGtVvoNfSWDgfBKmdajDKo18zJjg/BFpeJvE/U8v6yYl3Q+Eqk1Uqu8lslsvv9PUgUbGYiJ2zYRE4MdxNKRsbk9B+cw2luZSbwjdi8UKa3PsJTq1TMxbrNmNxZqMWM0Tmaiv5jstjqaag6eXuIiJWLQlK7ecZehXwiDGHC06i1S7ikKuq5cvhsSdTb3l1kRj+Dd5isNiSwy0UqoUK3z96oHXl95JTcU7y7kVWLlG0exWsD2hrDh+JxNepUKpWC0a9KmiVKtLOiq4SoCovfmNiRyk9j+0yU3rKtKrVXDhWrumS1IMM2uZgXIXUhb2kbX7Gt8NicFTrgUKjrUpAoS1Hxq7LcEBkJBsNCOu868f2aqM+K7muqU8WoWsrUyxHhyMaTBhlJX+bNrtJ35T+fXt7/ciFKquX5nr+5J8T4stPCVMYvjQUu9W2zAi6/W4lZ4fjMSGw9TEcToo9YU6nwpp0wDTqEWCtfNci9t9Zav7Mp/DfCEXpd0KNueQLlGuutgJWV7E1C1BXxQelQem1O9FO+tTJKI1bcpcnSR0+CzTdvVcjeop3TSv6O2SZo9og9eph1oVmNOoKbOFBRfDmzFr6DYdYw3aIHEUsLVovRerm7vM1Js2QZmv3bsU05Nb9NmD4MUbGnvP/ZcsMosad6YTQ8zpcGQ/COx70a2DqtUpH4bvRdKJV6oqJlBqOXOZgbm/nC8p/Dvvb742D83Hr26/bO5swXbilU7hu4rqlar3IqFVyCoSVVb31uQdr29pp7XdoycPjkw61b0AFaujKipUzKSBdg5Nja4B3mzD9kGXC4TDd8CcPilxBYIfEFZ2yAX0+ffymeIdlarpjKFKuiUcU3eFWpszI5ylgrBwMpy9L6zdeUpXX58umenY1fm8P8dPv7+52YztMlI90Kb1XSklSpZqa5FIuLmowzMQCbLcyZwGMWtTp1qZujqGU+R/OQON7L3rHEU+4LOiI64igKqeAWDLZgVNvM/pO4DD93TSncHKLeFQo9kGijyEiqcFvZJIcd/aOmInkyImZqpYfcXzFje56bgW2sJaOz3C+6XMw8TbeQ5e9pycBwWZs5Gg29eX6/SWadKhS4rVZpcXLCwjj6hQUuGK2MATMRLZAIiIBx43FimNQTobWGmmup5SsV6jVqg08RNhy329NLS4OgOhAPqJ4p4ZF1VFB8lAkVSl5lk3jp1JaVTy7tLPXoVurwR1BOhtyU3P0IEjGFpfCJDcT4VmBamLG9yuwPUjo32P3kFXSxavDcnpauSdp7FciZqUypsdPXrzE8zntNOzOkmmrozODH8ZpUalOkxZqlTVadNGd8o3YqgJC+ZnfIHH8MrDGU8ZRCP/AAjRdKjFbDMGDKQrfTS/WbQSvk0qOSWPucXZvtL/AOFSr4l2epUq1UULTvUcq7AKtOmutlHST/DOJU8Qhek1wCVYFSrKw3VlOoI6Sr8O7L16NLBsDTavh6lZshdu7dazMSA+W6kAjW3WTnZ3hb0e/qVSveV6pqsqElU0ACgkXOg3+wklVU8uL/Oluls3+RHRdTCkvzre+98fuQFTtRXq4mvQpVMJQ7mqaQp4lnFSsR/eWxAAPIC8sv8AbNMPWpMTnoUxVqgAkBSpbQ89jK52h7N4nFGpTangmV7hcQ1N/iKaZiVUW3IHO9tTNmL7N4lKtVsO9Jkq4VcO5rZ8wNNCisMvXr5nSbNU5Pl8f375NU6ker/Hy7YO1eONUxmCWk/8Cvh6lWxVbtYrkNyMw0O15ZBKtwns/Vp1eHuxS2HwrUXsTq5t8umo03lokVThxYlp8WbnqJiJGSgC+kyynS+5Gaw5gkkW66aeoMScwfCiyi9QhSM2VcvzXFjtr/WWaFNVFKPzKuoqOm4v5EGqk7C/pCrc2k7xHAd3TVlOV1tdl3OUE6Xva9vvOXg+GNSrnt4Qb/p+/Wby0yi4xvd/saR1TlGUrWS+pP4GhkRV+vrOqInROaIiIAiIgCIiAJgzMQCH43hVK5zvt5HfX1HXytIDCYRqjBVHqeQ9el/zlyrUVcZWAI6HymaVJVFlAA6CQzoRnJSZPTryhBxRSKtIqSCLEcjuD0MxLPxfh/eAMvzDzsCPP03+srtfDOlsykXva43tvax5SjW07g7x2L1HUxmvadmaYmJmViyIiIAiIgCZnmdOEwL1D4QfXkPX1m0Yyk7RVzWU4xV5M98Lw5eoLZTaxs2xF9feWjDU+6phb3yDfQXtOThnDQgDMvjHRjbpt+s5OOozOqpckgAge/L6TqU4+VTzk5dWXnVcOxrxWNauwpKthfrr+95OYPDCmoUct/Mzm4Vw8Uhc/Md/KSM3pxf+UtyOpJP2Y7CIiSEYiIgCIiAIiIAiIgCIiAJrqUwwsQCOhFx9JsiARXEOGKy+BQCP5bC45j9JWqlMqbEay8kThx/DkqjUkHqLXt7iV61DzMrDLNDUOnh5RUJmd/EOGtSNxqvIgeuhHI6e8j5zalOUHaR0qdSM1eJmIi01NzZRolzlUXP7/r9DLTwxe7pKHsp13I9tbypd66DNTF3Go26MDoTrpp7yc4TgO8VHYFF0ZaZ5HWx8vXedDSwSjxLc52sm3Lhe26OjHYlqjKlJj1JXry12y7es7sLhcurG7Hc/peb6dILoBabJbsU+VhERMmBERAEREAREQBERAEREAREQBERAEREA0YqjnRl6jT15H6yn4rDMhIZSPX97ecu856+GR9GUH1G1+h5SGtRVRE1Gs6T7FOo0S5yqLmduJwLrSzMoXU7bkWuM3nYW/wBIndRr0adUqFsQSCxO3oN/rNfG8aHy00NweY+/2/OQKlGnTkm7t495YdaVSpGystxwDAAjvGF+gP4ywic+CpZUVeg19TvOmWqcFCKiipUm5ybYiIm5oIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJD8Z4i1Iqq211JO++gA2tobyXMrHHcTncoF+U5b9TY39NxIq0nGDa3JaMFKaT2I2vVLsWPOSnAuHkt3jDQfczZwrg97PU9hz95PolhYaAcpBQ074uOe5Y1GpXD5cNj3ERLhSEREAREQBERAEREAREQBERAEREAREQBERAEREATSaCsQxUEjY22mYgGwTMRAEREAREQBERAEREAREQBERAP/9k="},
  ]

  async getData() {
    let estados: any = [];
    let data: any = [];
    let dataSanitizada: any = [];

    data = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    ).then((res: any) => {
      let dados: [] = res.json();
      return dados;
    });
    this.qntEstados = data.length
    //ordenar array
    data.sort((a: any, b: any) => {
      if (a['nome'] < b['nome']) {
        return -1;
      } else {
        return 1;
      }
    });
    data.map((res: any) => {
      if (!estados.includes(res['regiao']['nome'])) {
        estados.push(res['regiao']['nome']);
      }
    });
    const regioes = estados.map((resEstados: any) => {
      const filter = data.filter(
        (resData: any) => resEstados === resData['regiao']['nome']
      );
      const imagem = this.imagensRegiao.filter((resImagem: any) => resImagem.nome === resEstados)
      dataSanitizada.push({ 'regiao': resEstados, 'filtro': filter, "imagem": imagem });
    });
    this.showData = dataSanitizada
  }
}