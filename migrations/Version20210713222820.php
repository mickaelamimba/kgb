<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210713222820 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE specialties ADD specialties_agent_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE specialties ADD CONSTRAINT FK_410754B0827FEE8D FOREIGN KEY (specialties_agent_id) REFERENCES agents (id)');
        $this->addSql('CREATE INDEX IDX_410754B0827FEE8D ON specialties (specialties_agent_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE specialties DROP FOREIGN KEY FK_410754B0827FEE8D');
        $this->addSql('DROP INDEX IDX_410754B0827FEE8D ON specialties');
        $this->addSql('ALTER TABLE specialties DROP specialties_agent_id');
    }
}
