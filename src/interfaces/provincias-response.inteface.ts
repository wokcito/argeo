import { type Coordenadas } from './coordenadas.interface'

export interface SeveralProvinciasResponse {
    resultados: ProvinciasResponse[]
}

export interface ProvinciasResponse {
	cantidad: number
    total: number
    inicio: number
	parametros: ProvinciaFindParams
	provincias: Provincia[]
}

interface Provincia {
	categoria: string
    centroide: Coordenadas
    fuente: string
    id: string
    iso_id: string
    iso_nombre: string
    nombre: string
    nombre_completo: string
}

export interface ProvinciaFindParams {
    id?: string
    nombre?: string
    interseccion?: string
    orden?: string
    aplanar?: boolean
    campos?: Field[]
    max?: number
    inicio?: number
    exacto?: boolean
    formato?: string
}

type Field =
      'categoria'
    | 'centroide.lat'
    | 'centroide.lon'
    | 'fuente'
    | 'id'
    | 'iso_id'
    | 'iso_nombre'
    | 'nombre'
    | 'nombre_completo'
