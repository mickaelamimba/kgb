<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SpecialtiesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use phpDocumentor\Reflection\Types\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     paginationEnabled=false,
 *      normalizationContext={"groups"={"specialties:read"}},
 *     denormalizationContext={"groups"={"specialties:write"}},
 *          collectionOperations={
 *     "get",
 *
 *
 *     "post"
 *     },
 *
 *     itemOperations={
 *         "get",
 *         "put",
 *        "delete",
 *
 *     }

 * )
 * @ApiFilter(OrderFilter::class, properties={"name"})
 * @ORM\Entity(repositoryClass=SpecialtiesRepository::class)
 */
class Specialties
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"agents:read","specialties:read","missions:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"agents:read","specialties:read","specialties:write","missions:read"})
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=Agents::class, mappedBy="agentSpecialties")
     *
     */
    private  $agents;

    /**
     * @ORM\OneToMany(targetEntity=Missions::class, mappedBy="specialties")
     *
     */
    private  $missionsSpecialties;



    public function __construct()
    {
        $this->agents = new ArrayCollection();
        $this->missionsSpecialties = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection|Agents[]
     */
    public function getAgents(): \Doctrine\Common\Collections\Collection
    {
        return $this->agents;
    }

    public function addAgent(Agents $agent): self
    {
        if (!$this->agents->contains($agent)) {
            $this->agents[] = $agent;
            $agent->addAgentSpecialty($this);
        }

        return $this;
    }

    public function removeAgent(Agents $agent): self
    {
        if ($this->agents->removeElement($agent)) {
            $agent->removeAgentSpecialty($this);
        }

        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection|Missions[]
     */
    public function getMissionsSpecialties(): \Doctrine\Common\Collections\Collection
    {
        return $this->missionsSpecialties;
    }

    public function addMissionsSpecialty(Missions $missionsSpecialty): self
    {
        if (!$this->missionsSpecialties->contains($missionsSpecialty)) {
            $this->missionsSpecialties[] = $missionsSpecialty;
            $missionsSpecialty->setSpecialties($this);
        }

        return $this;
    }

    public function removeMissionsSpecialty(Missions $missionsSpecialty): self
    {
        if ($this->missionsSpecialties->removeElement($missionsSpecialty)) {
            // set the owning side to null (unless already changed)
            if ($missionsSpecialty->getSpecialties() === $this) {
                $missionsSpecialty->setSpecialties(null);
            }
        }

        return $this;
    }


}
